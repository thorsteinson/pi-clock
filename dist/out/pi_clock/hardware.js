// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.hardware');
goog.require('cljs.core');
pi_clock.hardware.rpio = require("rpio");
pi_clock.hardware.HIGH = pi_clock.hardware.rpio.HIGH;
pi_clock.hardware.LOW = pi_clock.hardware.rpio.LOW;
pi_clock.hardware.OUTPUT = pi_clock.hardware.rpio.OUTPUT;
pi_clock.hardware.open_pin_BANG_ = (function pi_clock$hardware$open_pin_BANG_(p){
return pi_clock.hardware.rpio.open(p,pi_clock.hardware.OUTPUT,pi_clock.hardware.HIGH);
});
pi_clock.hardware.set_low_BANG_ = (function pi_clock$hardware$set_low_BANG_(p){
return pi_clock.hardware.rpio.write(p,pi_clock.hardware.LOW);
});
pi_clock.hardware.set_high_BANG_ = (function pi_clock$hardware$set_high_BANG_(p){
return pi_clock.hardware.rpio.write(p,pi_clock.hardware.HIGH);
});

//# sourceMappingURL=hardware.js.map