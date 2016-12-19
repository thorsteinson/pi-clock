// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.HOURS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(36),(33),(32),(29),(7)], null);
pi_clock.core._main = (function pi_clock$core$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___8379 = arguments.length;
var i__8302__auto___8380 = (0);
while(true){
if((i__8302__auto___8380 < len__8301__auto___8379)){
args__8308__auto__.push((arguments[i__8302__auto___8380]));

var G__8381 = (i__8302__auto___8380 + (1));
i__8302__auto___8380 = G__8381;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.map.call(null,pi_clock.hardware.open_pin_BANG_,pi_clock.core.HOURS_REGISTER);

cljs.core.map.call(null,pi_clock.hardware.set_high_BANG_,pi_clock.core.HOURS_REGISTER);

return setTimeout((function (){
return cljs.core.println.call(null,"plz change",(1000));
}));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8378){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8378));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map