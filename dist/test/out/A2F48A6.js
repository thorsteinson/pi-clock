goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9006__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9007__i = 0, G__9007__a = new Array(arguments.length -  0);
while (G__9007__i < G__9007__a.length) {G__9007__a[G__9007__i] = arguments[G__9007__i + 0]; ++G__9007__i;}
  args = new cljs.core.IndexedSeq(G__9007__a,0);
} 
return G__9006__delegate.call(this,args);};
G__9006.cljs$lang$maxFixedArity = 0;
G__9006.cljs$lang$applyTo = (function (arglist__9008){
var args = cljs.core.seq(arglist__9008);
return G__9006__delegate(args);
});
G__9006.cljs$core$IFn$_invoke$arity$variadic = G__9006__delegate;
return G__9006;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9009__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9010__i = 0, G__9010__a = new Array(arguments.length -  0);
while (G__9010__i < G__9010__a.length) {G__9010__a[G__9010__i] = arguments[G__9010__i + 0]; ++G__9010__i;}
  args = new cljs.core.IndexedSeq(G__9010__a,0);
} 
return G__9009__delegate.call(this,args);};
G__9009.cljs$lang$maxFixedArity = 0;
G__9009.cljs$lang$applyTo = (function (arglist__9011){
var args = cljs.core.seq(arglist__9011);
return G__9009__delegate(args);
});
G__9009.cljs$core$IFn$_invoke$arity$variadic = G__9009__delegate;
return G__9009;
})()
;

return null;
});
