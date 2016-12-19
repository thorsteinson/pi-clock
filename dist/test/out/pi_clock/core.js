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
var len__8301__auto___8403 = arguments.length;
var i__8302__auto___8404 = (0);
while(true){
if((i__8302__auto___8404 < len__8301__auto___8403)){
args__8308__auto__.push((arguments[i__8302__auto___8404]));

var G__8405 = (i__8302__auto___8404 + (1));
i__8302__auto___8404 = G__8405;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var seq__8399 = cljs.core.seq.call(null,pi_clock.core.HOURS_REGISTER);
var chunk__8400 = null;
var count__8401 = (0);
var i__8402 = (0);
while(true){
if((i__8402 < count__8401)){
var p = cljs.core._nth.call(null,chunk__8400,i__8402);
pi_clock.core.open_pin_BANG_.call(null,p);

var G__8406 = seq__8399;
var G__8407 = chunk__8400;
var G__8408 = count__8401;
var G__8409 = (i__8402 + (1));
seq__8399 = G__8406;
chunk__8400 = G__8407;
count__8401 = G__8408;
i__8402 = G__8409;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8399);
if(temp__6753__auto__){
var seq__8399__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8399__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8399__$1);
var G__8410 = cljs.core.chunk_rest.call(null,seq__8399__$1);
var G__8411 = c__7991__auto__;
var G__8412 = cljs.core.count.call(null,c__7991__auto__);
var G__8413 = (0);
seq__8399 = G__8410;
chunk__8400 = G__8411;
count__8401 = G__8412;
i__8402 = G__8413;
continue;
} else {
var p = cljs.core.first.call(null,seq__8399__$1);
pi_clock.core.open_pin_BANG_.call(null,p);

var G__8414 = cljs.core.next.call(null,seq__8399__$1);
var G__8415 = null;
var G__8416 = (0);
var G__8417 = (0);
seq__8399 = G__8414;
chunk__8400 = G__8415;
count__8401 = G__8416;
i__8402 = G__8417;
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

pi_clock.core._main.cljs$lang$applyTo = (function (seq8398){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8398));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map