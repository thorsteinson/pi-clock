// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.bridge');
goog.require('cljs.core');
goog.require('pi_clock.binary');
goog.require('pi_clock.led');
pi_clock.bridge.HOURS_REGISTER = cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(36),(33),(32),(31),(29)], null));
pi_clock.bridge.MINUTES_REGISTER = cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(35),(38),(40),(15),(16)], null));
pi_clock.bridge.SECONDS_REGISTER = cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(37),(13),(5),(3)], null));
pi_clock.bridge.ALL_PINS = cljs.core.concat.call(null,pi_clock.bridge.HOURS_REGISTER,pi_clock.bridge.MINUTES_REGISTER,pi_clock.bridge.SECONDS_REGISTER);
pi_clock.bridge.assign_leds = (function pi_clock$bridge$assign_leds(register,n){
var size = cljs.core.count.call(null,register);
var binary_n = pi_clock.binary.binpad.call(null,n,size);
return cljs.core.map.call(null,pi_clock.led.make_led,register,binary_n);
});
pi_clock.bridge.time__GT_leds = (function pi_clock$bridge$time__GT_leds(p__8722){
var map__8725 = p__8722;
var map__8725__$1 = ((((!((map__8725 == null)))?((((map__8725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8725):map__8725);
var hh = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mm = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var ss = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return cljs.core.concat.call(null,pi_clock.bridge.assign_leds.call(null,pi_clock.bridge.HOURS_REGISTER,hh),pi_clock.bridge.assign_leds.call(null,pi_clock.bridge.MINUTES_REGISTER,mm),pi_clock.bridge.assign_leds.call(null,pi_clock.bridge.SECONDS_REGISTER,ss));
});

//# sourceMappingURL=bridge.js.map