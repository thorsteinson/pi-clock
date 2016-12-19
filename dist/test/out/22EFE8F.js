goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9137__i = 0, G__9137__a = new Array(arguments.length -  0);
while (G__9137__i < G__9137__a.length) {G__9137__a[G__9137__i] = arguments[G__9137__i + 0]; ++G__9137__i;}
  args = new cljs.core.IndexedSeq(G__9137__a,0);
} 
return G__9136__delegate.call(this,args);};
G__9136.cljs$lang$maxFixedArity = 0;
G__9136.cljs$lang$applyTo = (function (arglist__9138){
var args = cljs.core.seq(arglist__9138);
return G__9136__delegate(args);
});
G__9136.cljs$core$IFn$_invoke$arity$variadic = G__9136__delegate;
return G__9136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9140__i = 0, G__9140__a = new Array(arguments.length -  0);
while (G__9140__i < G__9140__a.length) {G__9140__a[G__9140__i] = arguments[G__9140__i + 0]; ++G__9140__i;}
  args = new cljs.core.IndexedSeq(G__9140__a,0);
} 
return G__9139__delegate.call(this,args);};
G__9139.cljs$lang$maxFixedArity = 0;
G__9139.cljs$lang$applyTo = (function (arglist__9141){
var args = cljs.core.seq(arglist__9141);
return G__9139__delegate(args);
});
G__9139.cljs$core$IFn$_invoke$arity$variadic = G__9139__delegate;
return G__9139;
})()
;

return null;
});
