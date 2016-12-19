goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8368__i = 0, G__8368__a = new Array(arguments.length -  0);
while (G__8368__i < G__8368__a.length) {G__8368__a[G__8368__i] = arguments[G__8368__i + 0]; ++G__8368__i;}
  args = new cljs.core.IndexedSeq(G__8368__a,0);
} 
return G__8367__delegate.call(this,args);};
G__8367.cljs$lang$maxFixedArity = 0;
G__8367.cljs$lang$applyTo = (function (arglist__8369){
var args = cljs.core.seq(arglist__8369);
return G__8367__delegate(args);
});
G__8367.cljs$core$IFn$_invoke$arity$variadic = G__8367__delegate;
return G__8367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8371__i = 0, G__8371__a = new Array(arguments.length -  0);
while (G__8371__i < G__8371__a.length) {G__8371__a[G__8371__i] = arguments[G__8371__i + 0]; ++G__8371__i;}
  args = new cljs.core.IndexedSeq(G__8371__a,0);
} 
return G__8370__delegate.call(this,args);};
G__8370.cljs$lang$maxFixedArity = 0;
G__8370.cljs$lang$applyTo = (function (arglist__8372){
var args = cljs.core.seq(arglist__8372);
return G__8370__delegate(args);
});
G__8370.cljs$core$IFn$_invoke$arity$variadic = G__8370__delegate;
return G__8370;
})()
;

return null;
});
