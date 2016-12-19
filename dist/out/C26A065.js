goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8778__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8779__i = 0, G__8779__a = new Array(arguments.length -  0);
while (G__8779__i < G__8779__a.length) {G__8779__a[G__8779__i] = arguments[G__8779__i + 0]; ++G__8779__i;}
  args = new cljs.core.IndexedSeq(G__8779__a,0);
} 
return G__8778__delegate.call(this,args);};
G__8778.cljs$lang$maxFixedArity = 0;
G__8778.cljs$lang$applyTo = (function (arglist__8780){
var args = cljs.core.seq(arglist__8780);
return G__8778__delegate(args);
});
G__8778.cljs$core$IFn$_invoke$arity$variadic = G__8778__delegate;
return G__8778;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8781__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8782__i = 0, G__8782__a = new Array(arguments.length -  0);
while (G__8782__i < G__8782__a.length) {G__8782__a[G__8782__i] = arguments[G__8782__i + 0]; ++G__8782__i;}
  args = new cljs.core.IndexedSeq(G__8782__a,0);
} 
return G__8781__delegate.call(this,args);};
G__8781.cljs$lang$maxFixedArity = 0;
G__8781.cljs$lang$applyTo = (function (arglist__8783){
var args = cljs.core.seq(arglist__8783);
return G__8781__delegate(args);
});
G__8781.cljs$core$IFn$_invoke$arity$variadic = G__8781__delegate;
return G__8781;
})()
;

return null;
});
