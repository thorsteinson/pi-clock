goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8773__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8774__i = 0, G__8774__a = new Array(arguments.length -  0);
while (G__8774__i < G__8774__a.length) {G__8774__a[G__8774__i] = arguments[G__8774__i + 0]; ++G__8774__i;}
  args = new cljs.core.IndexedSeq(G__8774__a,0);
} 
return G__8773__delegate.call(this,args);};
G__8773.cljs$lang$maxFixedArity = 0;
G__8773.cljs$lang$applyTo = (function (arglist__8775){
var args = cljs.core.seq(arglist__8775);
return G__8773__delegate(args);
});
G__8773.cljs$core$IFn$_invoke$arity$variadic = G__8773__delegate;
return G__8773;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8776__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8777__i = 0, G__8777__a = new Array(arguments.length -  0);
while (G__8777__i < G__8777__a.length) {G__8777__a[G__8777__i] = arguments[G__8777__i + 0]; ++G__8777__i;}
  args = new cljs.core.IndexedSeq(G__8777__a,0);
} 
return G__8776__delegate.call(this,args);};
G__8776.cljs$lang$maxFixedArity = 0;
G__8776.cljs$lang$applyTo = (function (arglist__8778){
var args = cljs.core.seq(arglist__8778);
return G__8776__delegate(args);
});
G__8776.cljs$core$IFn$_invoke$arity$variadic = G__8776__delegate;
return G__8776;
})()
;

return null;
});
