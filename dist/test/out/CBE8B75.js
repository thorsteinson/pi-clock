goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9182__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9183__i = 0, G__9183__a = new Array(arguments.length -  0);
while (G__9183__i < G__9183__a.length) {G__9183__a[G__9183__i] = arguments[G__9183__i + 0]; ++G__9183__i;}
  args = new cljs.core.IndexedSeq(G__9183__a,0);
} 
return G__9182__delegate.call(this,args);};
G__9182.cljs$lang$maxFixedArity = 0;
G__9182.cljs$lang$applyTo = (function (arglist__9184){
var args = cljs.core.seq(arglist__9184);
return G__9182__delegate(args);
});
G__9182.cljs$core$IFn$_invoke$arity$variadic = G__9182__delegate;
return G__9182;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9185__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9186__i = 0, G__9186__a = new Array(arguments.length -  0);
while (G__9186__i < G__9186__a.length) {G__9186__a[G__9186__i] = arguments[G__9186__i + 0]; ++G__9186__i;}
  args = new cljs.core.IndexedSeq(G__9186__a,0);
} 
return G__9185__delegate.call(this,args);};
G__9185.cljs$lang$maxFixedArity = 0;
G__9185.cljs$lang$applyTo = (function (arglist__9187){
var args = cljs.core.seq(arglist__9187);
return G__9185__delegate(args);
});
G__9185.cljs$core$IFn$_invoke$arity$variadic = G__9185__delegate;
return G__9185;
})()
;

return null;
});
