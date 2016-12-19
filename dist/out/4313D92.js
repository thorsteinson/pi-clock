goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8369__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8370__i = 0, G__8370__a = new Array(arguments.length -  0);
while (G__8370__i < G__8370__a.length) {G__8370__a[G__8370__i] = arguments[G__8370__i + 0]; ++G__8370__i;}
  args = new cljs.core.IndexedSeq(G__8370__a,0);
} 
return G__8369__delegate.call(this,args);};
G__8369.cljs$lang$maxFixedArity = 0;
G__8369.cljs$lang$applyTo = (function (arglist__8371){
var args = cljs.core.seq(arglist__8371);
return G__8369__delegate(args);
});
G__8369.cljs$core$IFn$_invoke$arity$variadic = G__8369__delegate;
return G__8369;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8372__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8373__i = 0, G__8373__a = new Array(arguments.length -  0);
while (G__8373__i < G__8373__a.length) {G__8373__a[G__8373__i] = arguments[G__8373__i + 0]; ++G__8373__i;}
  args = new cljs.core.IndexedSeq(G__8373__a,0);
} 
return G__8372__delegate.call(this,args);};
G__8372.cljs$lang$maxFixedArity = 0;
G__8372.cljs$lang$applyTo = (function (arglist__8374){
var args = cljs.core.seq(arglist__8374);
return G__8372__delegate(args);
});
G__8372.cljs$core$IFn$_invoke$arity$variadic = G__8372__delegate;
return G__8372;
})()
;

return null;
});
