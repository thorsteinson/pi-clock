goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8846__i = 0, G__8846__a = new Array(arguments.length -  0);
while (G__8846__i < G__8846__a.length) {G__8846__a[G__8846__i] = arguments[G__8846__i + 0]; ++G__8846__i;}
  args = new cljs.core.IndexedSeq(G__8846__a,0);
} 
return G__8845__delegate.call(this,args);};
G__8845.cljs$lang$maxFixedArity = 0;
G__8845.cljs$lang$applyTo = (function (arglist__8847){
var args = cljs.core.seq(arglist__8847);
return G__8845__delegate(args);
});
G__8845.cljs$core$IFn$_invoke$arity$variadic = G__8845__delegate;
return G__8845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8849__i = 0, G__8849__a = new Array(arguments.length -  0);
while (G__8849__i < G__8849__a.length) {G__8849__a[G__8849__i] = arguments[G__8849__i + 0]; ++G__8849__i;}
  args = new cljs.core.IndexedSeq(G__8849__a,0);
} 
return G__8848__delegate.call(this,args);};
G__8848.cljs$lang$maxFixedArity = 0;
G__8848.cljs$lang$applyTo = (function (arglist__8850){
var args = cljs.core.seq(arglist__8850);
return G__8848__delegate(args);
});
G__8848.cljs$core$IFn$_invoke$arity$variadic = G__8848__delegate;
return G__8848;
})()
;

return null;
});
