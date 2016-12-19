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
var len__8301__auto___8372 = arguments.length;
var i__8302__auto___8373 = (0);
while(true){
if((i__8302__auto___8373 < len__8301__auto___8372)){
args__8308__auto__.push((arguments[i__8302__auto___8373]));

var G__8374 = (i__8302__auto___8373 + (1));
i__8302__auto___8373 = G__8374;
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
var seq__8364_8375 = cljs.core.seq.call(null,pins);
var chunk__8365_8376 = null;
var count__8366_8377 = (0);
var i__8367_8378 = (0);
while(true){
if((i__8367_8378 < count__8366_8377)){
var p_8379 = cljs.core._nth.call(null,chunk__8365_8376,i__8367_8378);
pi_clock.hardware.open_pin_BANG_.call(null,p_8379);

pi_clock.hardware.set_high_BANG_.call(null,p_8379);

var G__8380 = seq__8364_8375;
var G__8381 = chunk__8365_8376;
var G__8382 = count__8366_8377;
var G__8383 = (i__8367_8378 + (1));
seq__8364_8375 = G__8380;
chunk__8365_8376 = G__8381;
count__8366_8377 = G__8382;
i__8367_8378 = G__8383;
continue;
} else {
var temp__6753__auto___8384 = cljs.core.seq.call(null,seq__8364_8375);
if(temp__6753__auto___8384){
var seq__8364_8385__$1 = temp__6753__auto___8384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8364_8385__$1)){
var c__7991__auto___8386 = cljs.core.chunk_first.call(null,seq__8364_8385__$1);
var G__8387 = cljs.core.chunk_rest.call(null,seq__8364_8385__$1);
var G__8388 = c__7991__auto___8386;
var G__8389 = cljs.core.count.call(null,c__7991__auto___8386);
var G__8390 = (0);
seq__8364_8375 = G__8387;
chunk__8365_8376 = G__8388;
count__8366_8377 = G__8389;
i__8367_8378 = G__8390;
continue;
} else {
var p_8391 = cljs.core.first.call(null,seq__8364_8385__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p_8391);

pi_clock.hardware.set_high_BANG_.call(null,p_8391);

var G__8392 = cljs.core.next.call(null,seq__8364_8385__$1);
var G__8393 = null;
var G__8394 = (0);
var G__8395 = (0);
seq__8364_8375 = G__8392;
chunk__8365_8376 = G__8393;
count__8366_8377 = G__8394;
i__8367_8378 = G__8395;
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
var seq__8368_8396 = cljs.core.seq.call(null,pins);
var chunk__8369_8397 = null;
var count__8370_8398 = (0);
var i__8371_8399 = (0);
while(true){
if((i__8371_8399 < count__8370_8398)){
var p_8400 = cljs.core._nth.call(null,chunk__8369_8397,i__8371_8399);
pi_clock.hardware.set_low_BANG_.call(null,p_8400);

var G__8401 = seq__8368_8396;
var G__8402 = chunk__8369_8397;
var G__8403 = count__8370_8398;
var G__8404 = (i__8371_8399 + (1));
seq__8368_8396 = G__8401;
chunk__8369_8397 = G__8402;
count__8370_8398 = G__8403;
i__8371_8399 = G__8404;
continue;
} else {
var temp__6753__auto___8405 = cljs.core.seq.call(null,seq__8368_8396);
if(temp__6753__auto___8405){
var seq__8368_8406__$1 = temp__6753__auto___8405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8368_8406__$1)){
var c__7991__auto___8407 = cljs.core.chunk_first.call(null,seq__8368_8406__$1);
var G__8408 = cljs.core.chunk_rest.call(null,seq__8368_8406__$1);
var G__8409 = c__7991__auto___8407;
var G__8410 = cljs.core.count.call(null,c__7991__auto___8407);
var G__8411 = (0);
seq__8368_8396 = G__8408;
chunk__8369_8397 = G__8409;
count__8370_8398 = G__8410;
i__8371_8399 = G__8411;
continue;
} else {
var p_8412 = cljs.core.first.call(null,seq__8368_8406__$1);
pi_clock.hardware.set_low_BANG_.call(null,p_8412);

var G__8413 = cljs.core.next.call(null,seq__8368_8406__$1);
var G__8414 = null;
var G__8415 = (0);
var G__8416 = (0);
seq__8368_8396 = G__8413;
chunk__8369_8397 = G__8414;
count__8370_8398 = G__8415;
i__8371_8399 = G__8416;
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

pi_clock.core._main.cljs$lang$applyTo = (function (seq8363){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8363));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map