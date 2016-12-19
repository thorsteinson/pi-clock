// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.HOURS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(36),(33),(32),(29),(7)], null);
pi_clock.core.rpio = require("rpio");
pi_clock.core._main = (function pi_clock$core$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___8368 = arguments.length;
var i__8302__auto___8369 = (0);
while(true){
if((i__8302__auto___8369 < len__8301__auto___8368)){
args__8308__auto__.push((arguments[i__8302__auto___8369]));

var G__8370 = (i__8302__auto___8369 + (1));
i__8302__auto___8369 = G__8370;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var seq__8364 = cljs.core.seq.call(null,pi_clock.core.HOURS_REGISTER);
var chunk__8365 = null;
var count__8366 = (0);
var i__8367 = (0);
while(true){
if((i__8367 < count__8366)){
var p = cljs.core._nth.call(null,chunk__8365,i__8367);
pi_clock.core.open_pin_BANG_.call(null,p);

var G__8371 = seq__8364;
var G__8372 = chunk__8365;
var G__8373 = count__8366;
var G__8374 = (i__8367 + (1));
seq__8364 = G__8371;
chunk__8365 = G__8372;
count__8366 = G__8373;
i__8367 = G__8374;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8364);
if(temp__6753__auto__){
var seq__8364__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8364__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8364__$1);
var G__8375 = cljs.core.chunk_rest.call(null,seq__8364__$1);
var G__8376 = c__7991__auto__;
var G__8377 = cljs.core.count.call(null,c__7991__auto__);
var G__8378 = (0);
seq__8364 = G__8375;
chunk__8365 = G__8376;
count__8366 = G__8377;
i__8367 = G__8378;
continue;
} else {
var p = cljs.core.first.call(null,seq__8364__$1);
pi_clock.core.open_pin_BANG_.call(null,p);

var G__8379 = cljs.core.next.call(null,seq__8364__$1);
var G__8380 = null;
var G__8381 = (0);
var G__8382 = (0);
seq__8364 = G__8379;
chunk__8365 = G__8380;
count__8366 = G__8381;
i__8367 = G__8382;
continue;
}
} else {
return null;
}
}
break;
}
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8363){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8363));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map