goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9001__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9002__i = 0, G__9002__a = new Array(arguments.length -  0);
while (G__9002__i < G__9002__a.length) {G__9002__a[G__9002__i] = arguments[G__9002__i + 0]; ++G__9002__i;}
  args = new cljs.core.IndexedSeq(G__9002__a,0);
} 
return G__9001__delegate.call(this,args);};
G__9001.cljs$lang$maxFixedArity = 0;
G__9001.cljs$lang$applyTo = (function (arglist__9003){
var args = cljs.core.seq(arglist__9003);
return G__9001__delegate(args);
});
G__9001.cljs$core$IFn$_invoke$arity$variadic = G__9001__delegate;
return G__9001;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9004__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9005__i = 0, G__9005__a = new Array(arguments.length -  0);
while (G__9005__i < G__9005__a.length) {G__9005__a[G__9005__i] = arguments[G__9005__i + 0]; ++G__9005__i;}
  args = new cljs.core.IndexedSeq(G__9005__a,0);
} 
return G__9004__delegate.call(this,args);};
G__9004.cljs$lang$maxFixedArity = 0;
G__9004.cljs$lang$applyTo = (function (arglist__9006){
var args = cljs.core.seq(arglist__9006);
return G__9004__delegate(args);
});
G__9004.cljs$core$IFn$_invoke$arity$variadic = G__9004__delegate;
return G__9004;
})()
;

return null;
});
