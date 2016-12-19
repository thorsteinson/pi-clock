goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8416__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8417__i = 0, G__8417__a = new Array(arguments.length -  0);
while (G__8417__i < G__8417__a.length) {G__8417__a[G__8417__i] = arguments[G__8417__i + 0]; ++G__8417__i;}
  args = new cljs.core.IndexedSeq(G__8417__a,0);
} 
return G__8416__delegate.call(this,args);};
G__8416.cljs$lang$maxFixedArity = 0;
G__8416.cljs$lang$applyTo = (function (arglist__8418){
var args = cljs.core.seq(arglist__8418);
return G__8416__delegate(args);
});
G__8416.cljs$core$IFn$_invoke$arity$variadic = G__8416__delegate;
return G__8416;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8419__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8420__i = 0, G__8420__a = new Array(arguments.length -  0);
while (G__8420__i < G__8420__a.length) {G__8420__a[G__8420__i] = arguments[G__8420__i + 0]; ++G__8420__i;}
  args = new cljs.core.IndexedSeq(G__8420__a,0);
} 
return G__8419__delegate.call(this,args);};
G__8419.cljs$lang$maxFixedArity = 0;
G__8419.cljs$lang$applyTo = (function (arglist__8421){
var args = cljs.core.seq(arglist__8421);
return G__8419__delegate(args);
});
G__8419.cljs$core$IFn$_invoke$arity$variadic = G__8419__delegate;
return G__8419;
})()
;

return null;
});
