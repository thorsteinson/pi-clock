goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8781__i = 0, G__8781__a = new Array(arguments.length -  0);
while (G__8781__i < G__8781__a.length) {G__8781__a[G__8781__i] = arguments[G__8781__i + 0]; ++G__8781__i;}
  args = new cljs.core.IndexedSeq(G__8781__a,0);
} 
return G__8780__delegate.call(this,args);};
G__8780.cljs$lang$maxFixedArity = 0;
G__8780.cljs$lang$applyTo = (function (arglist__8782){
var args = cljs.core.seq(arglist__8782);
return G__8780__delegate(args);
});
G__8780.cljs$core$IFn$_invoke$arity$variadic = G__8780__delegate;
return G__8780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8784__i = 0, G__8784__a = new Array(arguments.length -  0);
while (G__8784__i < G__8784__a.length) {G__8784__a[G__8784__i] = arguments[G__8784__i + 0]; ++G__8784__i;}
  args = new cljs.core.IndexedSeq(G__8784__a,0);
} 
return G__8783__delegate.call(this,args);};
G__8783.cljs$lang$maxFixedArity = 0;
G__8783.cljs$lang$applyTo = (function (arglist__8785){
var args = cljs.core.seq(arglist__8785);
return G__8783__delegate(args);
});
G__8783.cljs$core$IFn$_invoke$arity$variadic = G__8783__delegate;
return G__8783;
})()
;

return null;
});
