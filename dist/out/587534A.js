goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9805__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9806__i = 0, G__9806__a = new Array(arguments.length -  0);
while (G__9806__i < G__9806__a.length) {G__9806__a[G__9806__i] = arguments[G__9806__i + 0]; ++G__9806__i;}
  args = new cljs.core.IndexedSeq(G__9806__a,0);
} 
return G__9805__delegate.call(this,args);};
G__9805.cljs$lang$maxFixedArity = 0;
G__9805.cljs$lang$applyTo = (function (arglist__9807){
var args = cljs.core.seq(arglist__9807);
return G__9805__delegate(args);
});
G__9805.cljs$core$IFn$_invoke$arity$variadic = G__9805__delegate;
return G__9805;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9808__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9809__i = 0, G__9809__a = new Array(arguments.length -  0);
while (G__9809__i < G__9809__a.length) {G__9809__a[G__9809__i] = arguments[G__9809__i + 0]; ++G__9809__i;}
  args = new cljs.core.IndexedSeq(G__9809__a,0);
} 
return G__9808__delegate.call(this,args);};
G__9808.cljs$lang$maxFixedArity = 0;
G__9808.cljs$lang$applyTo = (function (arglist__9810){
var args = cljs.core.seq(arglist__9810);
return G__9808__delegate(args);
});
G__9808.cljs$core$IFn$_invoke$arity$variadic = G__9808__delegate;
return G__9808;
})()
;

return null;
});
