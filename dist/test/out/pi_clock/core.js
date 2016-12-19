// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
goog.require('pi_clock.clock');
goog.require('pi_clock.binary');
goog.require('pi_clock.led');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.HOURS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(36),(33),(32),(31),(29)], null);
pi_clock.core.MINUTES_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(35),(38),(40),(15),(16)], null);
pi_clock.core.SECONDS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(37),(13),(5),(3)], null);
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__8789){
var map__8792 = p__8789;
var map__8792__$1 = ((((!((map__8792 == null)))?((((map__8792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8792):map__8792);
var pin = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"on","on",173873944));
if(cljs.core.truth_(on_QMARK_)){
return pi_clock.hardware.set_high_BANG_.call(null,pin);
} else {
return pi_clock.hardware.set_low_BANG_.call(null,pin);
}
});
pi_clock.core.assign_leds = (function pi_clock$core$assign_leds(register,n){
var size = cljs.core.count.call(null,register);
var binary_n = pi_clock.binary.binpad.call(null,n,size);
return cljs.core.map.call(null,pi_clock.core.make_led,register,binary_n);
});
pi_clock.core.time__GT_leds = (function pi_clock$core$time__GT_leds(p__8794){
var map__8797 = p__8794;
var map__8797__$1 = ((((!((map__8797 == null)))?((((map__8797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8797):map__8797);
var hh = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mm = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var ss = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return cljs.core.concat.call(null,pi_clock.core.assign_leds.call(null,pi_clock.core.HOURS_REGISTER,hh),pi_clock.core.assign_leds.call(null,pi_clock.core.MINUTES_REGISTER,mm),pi_clock.core.assign_leds.call(null,pi_clock.core.SECONDS_REGISTER,ss));
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var pins = cljs.core.concat.call(null,pi_clock.core.HOURS_REGISTER,pi_clock.core.MINUTES_REGISTER,pi_clock.core.SECONDS_REGISTER);
var seq__8803 = cljs.core.seq.call(null,pins);
var chunk__8804 = null;
var count__8805 = (0);
var i__8806 = (0);
while(true){
if((i__8806 < count__8805)){
var p = cljs.core._nth.call(null,chunk__8804,i__8806);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8807 = seq__8803;
var G__8808 = chunk__8804;
var G__8809 = count__8805;
var G__8810 = (i__8806 + (1));
seq__8803 = G__8807;
chunk__8804 = G__8808;
count__8805 = G__8809;
i__8806 = G__8810;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8803);
if(temp__6753__auto__){
var seq__8803__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8803__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8803__$1);
var G__8811 = cljs.core.chunk_rest.call(null,seq__8803__$1);
var G__8812 = c__7991__auto__;
var G__8813 = cljs.core.count.call(null,c__7991__auto__);
var G__8814 = (0);
seq__8803 = G__8811;
chunk__8804 = G__8812;
count__8805 = G__8813;
i__8806 = G__8814;
continue;
} else {
var p = cljs.core.first.call(null,seq__8803__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8815 = cljs.core.next.call(null,seq__8803__$1);
var G__8816 = null;
var G__8817 = (0);
var G__8818 = (0);
seq__8803 = G__8815;
chunk__8804 = G__8816;
count__8805 = G__8817;
i__8806 = G__8818;
continue;
}
} else {
return null;
}
}
break;
}
});
pi_clock.core.update_time_BANG_ = (function pi_clock$core$update_time_BANG_(){
var seq__8823 = cljs.core.seq.call(null,pi_clock.core.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__8824 = null;
var count__8825 = (0);
var i__8826 = (0);
while(true){
if((i__8826 < count__8825)){
var led = cljs.core._nth.call(null,chunk__8824,i__8826);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8827 = seq__8823;
var G__8828 = chunk__8824;
var G__8829 = count__8825;
var G__8830 = (i__8826 + (1));
seq__8823 = G__8827;
chunk__8824 = G__8828;
count__8825 = G__8829;
i__8826 = G__8830;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8823);
if(temp__6753__auto__){
var seq__8823__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8823__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8823__$1);
var G__8831 = cljs.core.chunk_rest.call(null,seq__8823__$1);
var G__8832 = c__7991__auto__;
var G__8833 = cljs.core.count.call(null,c__7991__auto__);
var G__8834 = (0);
seq__8823 = G__8831;
chunk__8824 = G__8832;
count__8825 = G__8833;
i__8826 = G__8834;
continue;
} else {
var led = cljs.core.first.call(null,seq__8823__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8835 = cljs.core.next.call(null,seq__8823__$1);
var G__8836 = null;
var G__8837 = (0);
var G__8838 = (0);
seq__8823 = G__8835;
chunk__8824 = G__8836;
count__8825 = G__8837;
i__8826 = G__8838;
continue;
}
} else {
return null;
}
}
break;
}
});
pi_clock.core._main = (function pi_clock$core$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___8840 = arguments.length;
var i__8302__auto___8841 = (0);
while(true){
if((i__8302__auto___8841 < len__8301__auto___8840)){
args__8308__auto__.push((arguments[i__8302__auto___8841]));

var G__8842 = (i__8302__auto___8841 + (1));
i__8302__auto___8841 = G__8842;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"Initializing all pins");

pi_clock.core.init_pins_BANG_.call(null);

cljs.core.println.call(null,"Starting clock");

return setInterval((function (){
return pi_clock.core.update_time_BANG_.call(null).call(null);
}),(1000));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8839){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8839));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map