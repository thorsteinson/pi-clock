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
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__8722){
var map__8725 = p__8722;
var map__8725__$1 = ((((!((map__8725 == null)))?((((map__8725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8725):map__8725);
var pin = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"on","on",173873944));
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
pi_clock.core.time__GT_leds = (function pi_clock$core$time__GT_leds(p__8727){
var map__8730 = p__8727;
var map__8730__$1 = ((((!((map__8730 == null)))?((((map__8730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8730):map__8730);
var hh = cljs.core.get.call(null,map__8730__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mm = cljs.core.get.call(null,map__8730__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var ss = cljs.core.get.call(null,map__8730__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return cljs.core.concat.call(null,pi_clock.core.assign_leds.call(null,pi_clock.core.HOURS_REGISTER,hh),pi_clock.core.assign_leds.call(null,pi_clock.core.MINUTES_REGISTER,mm),pi_clock.core.assign_leds.call(null,pi_clock.core.SECONDS_REGISTER,ss));
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var pins = cljs.core.concat.call(null,pi_clock.core.HOURS_REGISTER,pi_clock.core.MINUTES_REGISTER,pi_clock.core.SECONDS_REGISTER);
var seq__8736 = cljs.core.seq.call(null,pins);
var chunk__8737 = null;
var count__8738 = (0);
var i__8739 = (0);
while(true){
if((i__8739 < count__8738)){
var p = cljs.core._nth.call(null,chunk__8737,i__8739);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8740 = seq__8736;
var G__8741 = chunk__8737;
var G__8742 = count__8738;
var G__8743 = (i__8739 + (1));
seq__8736 = G__8740;
chunk__8737 = G__8741;
count__8738 = G__8742;
i__8739 = G__8743;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8736);
if(temp__6753__auto__){
var seq__8736__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8736__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8736__$1);
var G__8744 = cljs.core.chunk_rest.call(null,seq__8736__$1);
var G__8745 = c__7991__auto__;
var G__8746 = cljs.core.count.call(null,c__7991__auto__);
var G__8747 = (0);
seq__8736 = G__8744;
chunk__8737 = G__8745;
count__8738 = G__8746;
i__8739 = G__8747;
continue;
} else {
var p = cljs.core.first.call(null,seq__8736__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8748 = cljs.core.next.call(null,seq__8736__$1);
var G__8749 = null;
var G__8750 = (0);
var G__8751 = (0);
seq__8736 = G__8748;
chunk__8737 = G__8749;
count__8738 = G__8750;
i__8739 = G__8751;
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
var seq__8756 = cljs.core.seq.call(null,pi_clock.core.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__8757 = null;
var count__8758 = (0);
var i__8759 = (0);
while(true){
if((i__8759 < count__8758)){
var led = cljs.core._nth.call(null,chunk__8757,i__8759);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8760 = seq__8756;
var G__8761 = chunk__8757;
var G__8762 = count__8758;
var G__8763 = (i__8759 + (1));
seq__8756 = G__8760;
chunk__8757 = G__8761;
count__8758 = G__8762;
i__8759 = G__8763;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8756);
if(temp__6753__auto__){
var seq__8756__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8756__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8756__$1);
var G__8764 = cljs.core.chunk_rest.call(null,seq__8756__$1);
var G__8765 = c__7991__auto__;
var G__8766 = cljs.core.count.call(null,c__7991__auto__);
var G__8767 = (0);
seq__8756 = G__8764;
chunk__8757 = G__8765;
count__8758 = G__8766;
i__8759 = G__8767;
continue;
} else {
var led = cljs.core.first.call(null,seq__8756__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8768 = cljs.core.next.call(null,seq__8756__$1);
var G__8769 = null;
var G__8770 = (0);
var G__8771 = (0);
seq__8756 = G__8768;
chunk__8757 = G__8769;
count__8758 = G__8770;
i__8759 = G__8771;
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
var len__8301__auto___8773 = arguments.length;
var i__8302__auto___8774 = (0);
while(true){
if((i__8302__auto___8774 < len__8301__auto___8773)){
args__8308__auto__.push((arguments[i__8302__auto___8774]));

var G__8775 = (i__8302__auto___8774 + (1));
i__8302__auto___8774 = G__8775;
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

pi_clock.core._main.cljs$lang$applyTo = (function (seq8772){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8772));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map