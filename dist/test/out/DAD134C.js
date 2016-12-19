goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8835__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8836__i = 0, G__8836__a = new Array(arguments.length -  0);
while (G__8836__i < G__8836__a.length) {G__8836__a[G__8836__i] = arguments[G__8836__i + 0]; ++G__8836__i;}
  args = new cljs.core.IndexedSeq(G__8836__a,0);
} 
return G__8835__delegate.call(this,args);};
G__8835.cljs$lang$maxFixedArity = 0;
G__8835.cljs$lang$applyTo = (function (arglist__8837){
var args = cljs.core.seq(arglist__8837);
return G__8835__delegate(args);
});
G__8835.cljs$core$IFn$_invoke$arity$variadic = G__8835__delegate;
return G__8835;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8838__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8839__i = 0, G__8839__a = new Array(arguments.length -  0);
while (G__8839__i < G__8839__a.length) {G__8839__a[G__8839__i] = arguments[G__8839__i + 0]; ++G__8839__i;}
  args = new cljs.core.IndexedSeq(G__8839__a,0);
} 
return G__8838__delegate.call(this,args);};
G__8838.cljs$lang$maxFixedArity = 0;
G__8838.cljs$lang$applyTo = (function (arglist__8840){
var args = cljs.core.seq(arglist__8840);
return G__8838__delegate(args);
});
G__8838.cljs$core$IFn$_invoke$arity$variadic = G__8838__delegate;
return G__8838;
})()
;

return null;
});
