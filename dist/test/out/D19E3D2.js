goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8390__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8391__i = 0, G__8391__a = new Array(arguments.length -  0);
while (G__8391__i < G__8391__a.length) {G__8391__a[G__8391__i] = arguments[G__8391__i + 0]; ++G__8391__i;}
  args = new cljs.core.IndexedSeq(G__8391__a,0);
} 
return G__8390__delegate.call(this,args);};
G__8390.cljs$lang$maxFixedArity = 0;
G__8390.cljs$lang$applyTo = (function (arglist__8392){
var args = cljs.core.seq(arglist__8392);
return G__8390__delegate(args);
});
G__8390.cljs$core$IFn$_invoke$arity$variadic = G__8390__delegate;
return G__8390;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8393__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8394__i = 0, G__8394__a = new Array(arguments.length -  0);
while (G__8394__i < G__8394__a.length) {G__8394__a[G__8394__i] = arguments[G__8394__i + 0]; ++G__8394__i;}
  args = new cljs.core.IndexedSeq(G__8394__a,0);
} 
return G__8393__delegate.call(this,args);};
G__8393.cljs$lang$maxFixedArity = 0;
G__8393.cljs$lang$applyTo = (function (arglist__8395){
var args = cljs.core.seq(arglist__8395);
return G__8393__delegate(args);
});
G__8393.cljs$core$IFn$_invoke$arity$variadic = G__8393__delegate;
return G__8393;
})()
;

return null;
});
