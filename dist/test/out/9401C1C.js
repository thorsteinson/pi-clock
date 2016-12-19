goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9065__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9066__i = 0, G__9066__a = new Array(arguments.length -  0);
while (G__9066__i < G__9066__a.length) {G__9066__a[G__9066__i] = arguments[G__9066__i + 0]; ++G__9066__i;}
  args = new cljs.core.IndexedSeq(G__9066__a,0);
} 
return G__9065__delegate.call(this,args);};
G__9065.cljs$lang$maxFixedArity = 0;
G__9065.cljs$lang$applyTo = (function (arglist__9067){
var args = cljs.core.seq(arglist__9067);
return G__9065__delegate(args);
});
G__9065.cljs$core$IFn$_invoke$arity$variadic = G__9065__delegate;
return G__9065;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9068__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9069__i = 0, G__9069__a = new Array(arguments.length -  0);
while (G__9069__i < G__9069__a.length) {G__9069__a[G__9069__i] = arguments[G__9069__i + 0]; ++G__9069__i;}
  args = new cljs.core.IndexedSeq(G__9069__a,0);
} 
return G__9068__delegate.call(this,args);};
G__9068.cljs$lang$maxFixedArity = 0;
G__9068.cljs$lang$applyTo = (function (arglist__9070){
var args = cljs.core.seq(arglist__9070);
return G__9068__delegate(args);
});
G__9068.cljs$core$IFn$_invoke$arity$variadic = G__9068__delegate;
return G__9068;
})()
;

return null;
});
