export class AudioManager {
    constructor() {
        this.ctx = null;
        this.isEnabled = true;
        this.masterGain = null;
        this.nextNoteTime = 0;
        this.noiseBuffer = null;
        this.isLooping = false;
        this.loopTimer = null;
    }

    init() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.15; // Slightly louder
        this.masterGain.connect(this.ctx.destination);

        // Generate White Noise Buffer (1 second)
        const bufferSize = this.ctx.sampleRate;
        this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = this.noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
    }

    toggle() {
        if (!this.ctx) this.init();

        this.isEnabled = !this.isEnabled;

        if (this.isEnabled) {
            if (this.ctx.state === 'suspended') this.ctx.resume();
            return true;
        } else {
            this.ctx.suspend();
            this.stopLoop();
            return false;
        }
    }

    startLoop() {
        if (!this.isEnabled || !this.ctx || this.isLooping) return;
        this.isLooping = true;
        this.loop();
    }

    stopLoop() {
        this.isLooping = false;
        if (this.loopTimer) {
            clearTimeout(this.loopTimer);
            this.loopTimer = null;
        }
    }

    loop() {
        if (!this.isLooping) return;
        this.playGlitch(1.0); // Full intensity during loop
        // Schedule next call
        const gap = 50 + Math.random() * 80;
        this.loopTimer = setTimeout(() => this.loop(), gap);
    }

    playGlitch(intensity = 1.0) {
        // Haptic Feedback (Mobile) - modulated by intensity
        if (navigator.vibrate && intensity > 0.1) {
            // Only vibrate if intensity is significant
            if (Math.random() < intensity) {
                // Heavier "impact" feel, scaled by intensity
                navigator.vibrate(15);
            }
        }

        if (!this.isEnabled || !this.ctx) return;

        // Rate limit - density increases with intensity
        const now = this.ctx.currentTime;
        if (now < this.nextNoteTime) return;

        // 1. Digital Blip (Square/Saw)
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = Math.random() > 0.5 ? 'square' : 'sawtooth';

        // Pitch gets lower/calmer as intensity drops? Or stays chaotic?
        // Let's keep it chaotic but quieter.
        const freq = 1200 + Math.random() * 2000;
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.1, now + 0.03);

        // Scale volume by intensity
        const volume = 0.05 * intensity;
        oscGain.gain.setValueAtTime(volume, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.03);

        // 2. White Noise Burst (Texture)
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;
        const noiseGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        filter.type = 'highpass';
        filter.frequency.value = 3000;

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.masterGain);

        // Scale noise volume by intensity
        const noiseVol = 0.08 * intensity;
        noiseGain.gain.setValueAtTime(noiseVol, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

        noise.start(now);
        noise.stop(now + 0.02);

        // Schedule next (sparse as intensity drops)
        // linear interpolation: 
        // intensity 1 -> gap ~0.02
        // intensity 0 -> gap ~0.12
        const gap = 0.02 + Math.random() * (0.04 + (1 - intensity) * 0.1);
        this.nextNoteTime = now + gap;
    }
}

export const audioManager = new AudioManager();
