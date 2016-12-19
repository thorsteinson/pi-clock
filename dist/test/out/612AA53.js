goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9067__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9068__i = 0, G__9068__a = new Array(arguments.length -  0);
while (G__9068__i < G__9068__a.length) {G__9068__a[G__9068__i] = arguments[G__9068__i + 0]; ++G__9068__i;}
  args = new cljs.core.IndexedSeq(G__9068__a,0);
} 
return G__9067__delegate.call(this,args);};
G__9067.cljs$lang$maxFixedArity = 0;
G__9067.cljs$lang$applyTo = (function (arglist__9069){
var args = cljs.core.seq(arglist__9069);
return G__9067__delegate(args);
});
G__9067.cljs$core$IFn$_invoke$arity$variadic = G__9067__delegate;
return G__9067;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9070__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9071__i = 0, G__9071__a = new Array(arguments.length -  0);
while (G__9071__i < G__9071__a.length) {G__9071__a[G__9071__i] = arguments[G__9071__i + 0]; ++G__9071__i;}
  args = new cljs.core.IndexedSeq(G__9071__a,0);
} 
return G__9070__delegate.call(this,args);};
G__9070.cljs$lang$maxFixedArity = 0;
G__9070.cljs$lang$applyTo = (function (arglist__9072){
var args = cljs.core.seq(arglist__9072);
return G__9070__delegate(args);
});
G__9070.cljs$core$IFn$_invoke$arity$variadic = G__9070__delegate;
return G__9070;
})()
;

return null;
});
