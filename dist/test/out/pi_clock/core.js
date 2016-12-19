// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.HOURS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(36),(33),(32),(31),(29)], null);
pi_clock.core.MINUTES_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(35),(38),(40),(15),(16)], null);
pi_clock.core.SECOUNDS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(37),(13),(5),(3)], null);
pi_clock.core.rpio = require("rpio");
pi_clock.core._main = (function pi_clock$core$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___8441 = arguments.length;
var i__8302__auto___8442 = (0);
while(true){
if((i__8302__auto___8442 < len__8301__auto___8441)){
args__8308__auto__.push((arguments[i__8302__auto___8442]));

var G__8443 = (i__8302__auto___8442 + (1));
i__8302__auto___8442 = G__8443;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pins = cljs.core.concat.call(null,pi_clock.core.HOURS_REGISTER,pi_clock.core.MINUTES_REGISTER,pi_clock.core.SECOUNDS_REGISTER);
var seq__8433_8444 = cljs.core.seq.call(null,pins);
var chunk__8434_8445 = null;
var count__8435_8446 = (0);
var i__8436_8447 = (0);
while(true){
if((i__8436_8447 < count__8435_8446)){
var p_8448 = cljs.core._nth.call(null,chunk__8434_8445,i__8436_8447);
pi_clock.hardware.open_pin_BANG_.call(null,p_8448);

pi_clock.hardware.set_high_BANG_.call(null,p_8448);

var G__8449 = seq__8433_8444;
var G__8450 = chunk__8434_8445;
var G__8451 = count__8435_8446;
var G__8452 = (i__8436_8447 + (1));
seq__8433_8444 = G__8449;
chunk__8434_8445 = G__8450;
count__8435_8446 = G__8451;
i__8436_8447 = G__8452;
continue;
} else {
var temp__6753__auto___8453 = cljs.core.seq.call(null,seq__8433_8444);
if(temp__6753__auto___8453){
var seq__8433_8454__$1 = temp__6753__auto___8453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8433_8454__$1)){
var c__7991__auto___8455 = cljs.core.chunk_first.call(null,seq__8433_8454__$1);
var G__8456 = cljs.core.chunk_rest.call(null,seq__8433_8454__$1);
var G__8457 = c__7991__auto___8455;
var G__8458 = cljs.core.count.call(null,c__7991__auto___8455);
var G__8459 = (0);
seq__8433_8444 = G__8456;
chunk__8434_8445 = G__8457;
count__8435_8446 = G__8458;
i__8436_8447 = G__8459;
continue;
} else {
var p_8460 = cljs.core.first.call(null,seq__8433_8454__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p_8460);

pi_clock.hardware.set_high_BANG_.call(null,p_8460);

var G__8461 = cljs.core.next.call(null,seq__8433_8454__$1);
var G__8462 = null;
var G__8463 = (0);
var G__8464 = (0);
seq__8433_8444 = G__8461;
chunk__8434_8445 = G__8462;
count__8435_8446 = G__8463;
i__8436_8447 = G__8464;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null,"All LEDs should be turned on");

return setTimeout(((function (pins){
return (function (){
var seq__8437_8465 = cljs.core.seq.call(null,pins);
var chunk__8438_8466 = null;
var count__8439_8467 = (0);
var i__8440_8468 = (0);
while(true){
if((i__8440_8468 < count__8439_8467)){
var p_8469 = cljs.core._nth.call(null,chunk__8438_8466,i__8440_8468);
pi_clock.hardware.set_low_BANG_.call(null,p_8469);

var G__8470 = seq__8437_8465;
var G__8471 = chunk__8438_8466;
var G__8472 = count__8439_8467;
var G__8473 = (i__8440_8468 + (1));
seq__8437_8465 = G__8470;
chunk__8438_8466 = G__8471;
count__8439_8467 = G__8472;
i__8440_8468 = G__8473;
continue;
} else {
var temp__6753__auto___8474 = cljs.core.seq.call(null,seq__8437_8465);
if(temp__6753__auto___8474){
var seq__8437_8475__$1 = temp__6753__auto___8474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8437_8475__$1)){
var c__7991__auto___8476 = cljs.core.chunk_first.call(null,seq__8437_8475__$1);
var G__8477 = cljs.core.chunk_rest.call(null,seq__8437_8475__$1);
var G__8478 = c__7991__auto___8476;
var G__8479 = cljs.core.count.call(null,c__7991__auto___8476);
var G__8480 = (0);
seq__8437_8465 = G__8477;
chunk__8438_8466 = G__8478;
count__8439_8467 = G__8479;
i__8440_8468 = G__8480;
continue;
} else {
var p_8481 = cljs.core.first.call(null,seq__8437_8475__$1);
pi_clock.hardware.set_low_BANG_.call(null,p_8481);

var G__8482 = cljs.core.next.call(null,seq__8437_8475__$1);
var G__8483 = null;
var G__8484 = (0);
var G__8485 = (0);
seq__8437_8465 = G__8482;
chunk__8438_8466 = G__8483;
count__8439_8467 = G__8484;
i__8440_8468 = G__8485;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"All LEDs should be off");
});})(pins))
,(1000));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8432){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8432));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map