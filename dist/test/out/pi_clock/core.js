// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
goog.require('pi_clock.clock');
goog.require('pi_clock.bridge');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__9016){
var map__9019 = p__9016;
var map__9019__$1 = ((((!((map__9019 == null)))?((((map__9019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9019):map__9019);
var pin = cljs.core.get.call(null,map__9019__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__9019__$1,new cljs.core.Keyword(null,"on","on",173873944));
if(cljs.core.truth_(on_QMARK_)){
return pi_clock.hardware.set_high_BANG_.call(null,pin);
} else {
return pi_clock.hardware.set_low_BANG_.call(null,pin);
}
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var seq__9025 = cljs.core.seq.call(null,pi_clock.bridge.ALL_PINS);
var chunk__9026 = null;
var count__9027 = (0);
var i__9028 = (0);
while(true){
if((i__9028 < count__9027)){
var p = cljs.core._nth.call(null,chunk__9026,i__9028);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__9029 = seq__9025;
var G__9030 = chunk__9026;
var G__9031 = count__9027;
var G__9032 = (i__9028 + (1));
seq__9025 = G__9029;
chunk__9026 = G__9030;
count__9027 = G__9031;
i__9028 = G__9032;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__9025);
if(temp__6753__auto__){
var seq__9025__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9025__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__9025__$1);
var G__9033 = cljs.core.chunk_rest.call(null,seq__9025__$1);
var G__9034 = c__7991__auto__;
var G__9035 = cljs.core.count.call(null,c__7991__auto__);
var G__9036 = (0);
seq__9025 = G__9033;
chunk__9026 = G__9034;
count__9027 = G__9035;
i__9028 = G__9036;
continue;
} else {
var p = cljs.core.first.call(null,seq__9025__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__9037 = cljs.core.next.call(null,seq__9025__$1);
var G__9038 = null;
var G__9039 = (0);
var G__9040 = (0);
seq__9025 = G__9037;
chunk__9026 = G__9038;
count__9027 = G__9039;
i__9028 = G__9040;
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
var seq__9045 = cljs.core.seq.call(null,pi_clock.bridge.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__9046 = null;
var count__9047 = (0);
var i__9048 = (0);
while(true){
if((i__9048 < count__9047)){
var led = cljs.core._nth.call(null,chunk__9046,i__9048);
pi_clock.core.update_led_BANG_.call(null,led);

var G__9049 = seq__9045;
var G__9050 = chunk__9046;
var G__9051 = count__9047;
var G__9052 = (i__9048 + (1));
seq__9045 = G__9049;
chunk__9046 = G__9050;
count__9047 = G__9051;
i__9048 = G__9052;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__9045);
if(temp__6753__auto__){
var seq__9045__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9045__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__9045__$1);
var G__9053 = cljs.core.chunk_rest.call(null,seq__9045__$1);
var G__9054 = c__7991__auto__;
var G__9055 = cljs.core.count.call(null,c__7991__auto__);
var G__9056 = (0);
seq__9045 = G__9053;
chunk__9046 = G__9054;
count__9047 = G__9055;
i__9048 = G__9056;
continue;
} else {
var led = cljs.core.first.call(null,seq__9045__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__9057 = cljs.core.next.call(null,seq__9045__$1);
var G__9058 = null;
var G__9059 = (0);
var G__9060 = (0);
seq__9045 = G__9057;
chunk__9046 = G__9058;
count__9047 = G__9059;
i__9048 = G__9060;
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
var len__8301__auto___9062 = arguments.length;
var i__8302__auto___9063 = (0);
while(true){
if((i__8302__auto___9063 < len__8301__auto___9062)){
args__8308__auto__.push((arguments[i__8302__auto___9063]));

var G__9064 = (i__8302__auto___9063 + (1));
i__8302__auto___9063 = G__9064;
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

pi_clock.core._main.cljs$lang$applyTo = (function (seq9061){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9061));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map