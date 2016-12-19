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
var len__8301__auto___8399 = arguments.length;
var i__8302__auto___8400 = (0);
while(true){
if((i__8302__auto___8400 < len__8301__auto___8399)){
args__8308__auto__.push((arguments[i__8302__auto___8400]));

var G__8401 = (i__8302__auto___8400 + (1));
i__8302__auto___8400 = G__8401;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var seq__8395 = cljs.core.seq.call(null,pi_clock.core.HOURS_REGISTER);
var chunk__8396 = null;
var count__8397 = (0);
var i__8398 = (0);
while(true){
if((i__8398 < count__8397)){
var p = cljs.core._nth.call(null,chunk__8396,i__8398);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8402 = seq__8395;
var G__8403 = chunk__8396;
var G__8404 = count__8397;
var G__8405 = (i__8398 + (1));
seq__8395 = G__8402;
chunk__8396 = G__8403;
count__8397 = G__8404;
i__8398 = G__8405;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8395);
if(temp__6753__auto__){
var seq__8395__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8395__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8395__$1);
var G__8406 = cljs.core.chunk_rest.call(null,seq__8395__$1);
var G__8407 = c__7991__auto__;
var G__8408 = cljs.core.count.call(null,c__7991__auto__);
var G__8409 = (0);
seq__8395 = G__8406;
chunk__8396 = G__8407;
count__8397 = G__8408;
i__8398 = G__8409;
continue;
} else {
var p = cljs.core.first.call(null,seq__8395__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8410 = cljs.core.next.call(null,seq__8395__$1);
var G__8411 = null;
var G__8412 = (0);
var G__8413 = (0);
seq__8395 = G__8410;
chunk__8396 = G__8411;
count__8397 = G__8412;
i__8398 = G__8413;
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

pi_clock.core._main.cljs$lang$applyTo = (function (seq8394){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8394));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map