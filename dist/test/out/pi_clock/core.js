// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
goog.require('pi_clock.clock');
goog.require('pi_clock.bridge');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__8784){
var map__8787 = p__8784;
var map__8787__$1 = ((((!((map__8787 == null)))?((((map__8787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8787):map__8787);
var pin = cljs.core.get.call(null,map__8787__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__8787__$1,new cljs.core.Keyword(null,"on","on",173873944));
if(cljs.core.truth_(on_QMARK_)){
return pi_clock.hardware.set_high_BANG_.call(null,pin);
} else {
return pi_clock.hardware.set_low_BANG_.call(null,pin);
}
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var seq__8793 = cljs.core.seq.call(null,pi_clock.bridge.ALL_PINS);
var chunk__8794 = null;
var count__8795 = (0);
var i__8796 = (0);
while(true){
if((i__8796 < count__8795)){
var p = cljs.core._nth.call(null,chunk__8794,i__8796);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8797 = seq__8793;
var G__8798 = chunk__8794;
var G__8799 = count__8795;
var G__8800 = (i__8796 + (1));
seq__8793 = G__8797;
chunk__8794 = G__8798;
count__8795 = G__8799;
i__8796 = G__8800;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8793);
if(temp__6753__auto__){
var seq__8793__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8793__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8793__$1);
var G__8801 = cljs.core.chunk_rest.call(null,seq__8793__$1);
var G__8802 = c__7991__auto__;
var G__8803 = cljs.core.count.call(null,c__7991__auto__);
var G__8804 = (0);
seq__8793 = G__8801;
chunk__8794 = G__8802;
count__8795 = G__8803;
i__8796 = G__8804;
continue;
} else {
var p = cljs.core.first.call(null,seq__8793__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8805 = cljs.core.next.call(null,seq__8793__$1);
var G__8806 = null;
var G__8807 = (0);
var G__8808 = (0);
seq__8793 = G__8805;
chunk__8794 = G__8806;
count__8795 = G__8807;
i__8796 = G__8808;
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
var seq__8813 = cljs.core.seq.call(null,pi_clock.bridge.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__8814 = null;
var count__8815 = (0);
var i__8816 = (0);
while(true){
if((i__8816 < count__8815)){
var led = cljs.core._nth.call(null,chunk__8814,i__8816);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8817 = seq__8813;
var G__8818 = chunk__8814;
var G__8819 = count__8815;
var G__8820 = (i__8816 + (1));
seq__8813 = G__8817;
chunk__8814 = G__8818;
count__8815 = G__8819;
i__8816 = G__8820;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8813);
if(temp__6753__auto__){
var seq__8813__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8813__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8813__$1);
var G__8821 = cljs.core.chunk_rest.call(null,seq__8813__$1);
var G__8822 = c__7991__auto__;
var G__8823 = cljs.core.count.call(null,c__7991__auto__);
var G__8824 = (0);
seq__8813 = G__8821;
chunk__8814 = G__8822;
count__8815 = G__8823;
i__8816 = G__8824;
continue;
} else {
var led = cljs.core.first.call(null,seq__8813__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8825 = cljs.core.next.call(null,seq__8813__$1);
var G__8826 = null;
var G__8827 = (0);
var G__8828 = (0);
seq__8813 = G__8825;
chunk__8814 = G__8826;
count__8815 = G__8827;
i__8816 = G__8828;
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
var len__8301__auto___8830 = arguments.length;
var i__8302__auto___8831 = (0);
while(true){
if((i__8302__auto___8831 < len__8301__auto___8830)){
args__8308__auto__.push((arguments[i__8302__auto___8831]));

var G__8832 = (i__8302__auto___8831 + (1));
i__8302__auto___8831 = G__8832;
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
return pi_clock.core.update_time_BANG_.call(null);
}),(1000));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8829){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8829));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map