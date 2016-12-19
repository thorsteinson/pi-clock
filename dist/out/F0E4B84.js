goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8383__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8384__i = 0, G__8384__a = new Array(arguments.length -  0);
while (G__8384__i < G__8384__a.length) {G__8384__a[G__8384__i] = arguments[G__8384__i + 0]; ++G__8384__i;}
  args = new cljs.core.IndexedSeq(G__8384__a,0);
} 
return G__8383__delegate.call(this,args);};
G__8383.cljs$lang$maxFixedArity = 0;
G__8383.cljs$lang$applyTo = (function (arglist__8385){
var args = cljs.core.seq(arglist__8385);
return G__8383__delegate(args);
});
G__8383.cljs$core$IFn$_invoke$arity$variadic = G__8383__delegate;
return G__8383;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8386__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8387__i = 0, G__8387__a = new Array(arguments.length -  0);
while (G__8387__i < G__8387__a.length) {G__8387__a[G__8387__i] = arguments[G__8387__i + 0]; ++G__8387__i;}
  args = new cljs.core.IndexedSeq(G__8387__a,0);
} 
return G__8386__delegate.call(this,args);};
G__8386.cljs$lang$maxFixedArity = 0;
G__8386.cljs$lang$applyTo = (function (arglist__8388){
var args = cljs.core.seq(arglist__8388);
return G__8386__delegate(args);
});
G__8386.cljs$core$IFn$_invoke$arity$variadic = G__8386__delegate;
return G__8386;
})()
;

return null;
});
