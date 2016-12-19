// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core_test');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.test');
goog.require('pi_clock.binary_test');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core_test._main = (function pi_clock$core_test$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___9060 = arguments.length;
var i__8302__auto___9061 = (0);
while(true){
if((i__8302__auto___9061 < len__8301__auto___9060)){
args__8308__auto__.push((arguments[i__8302__auto___9061]));

var G__9062 = (i__8302__auto___9061 + (1));
i__8302__auto___9061 = G__9062;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core_test._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core_test._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.test.run_block.call(null,(function (){var env9058 = cljs.test.empty_env.call(null);
var summary9059 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9058,summary9059){
return (function (){
cljs.test.set_env_BANG_.call(null,env9058);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__8947__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__8947__auto__,env9058,summary9059){
return (function (){
if((env__8947__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__8947__auto__,env9058,summary9059))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return pi_clock.binary_test.__GT_binary;},new cljs.core.Symbol("pi-clock.binary-test","->binary","pi-clock.binary-test/->binary",1832119073,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"->binary","->binary",-839080501,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",18,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.__GT_binary)?pi_clock.binary_test.__GT_binary.cljs$lang$test:null)])),new cljs.core.Var(function(){return pi_clock.binary_test.pad_zeros;},new cljs.core.Symbol("pi-clock.binary-test","pad-zeros","pi-clock.binary-test/pad-zeros",925341714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"pad-zeros","pad-zeros",-689907004,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",19,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.pad_zeros)?pi_clock.binary_test.pad_zeros.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__8947__auto__,env9058,summary9059){
return (function (){
if((env__8947__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__8947__auto__,env9058,summary9059))
], null));
})());
});})(env9058,summary9059))
,((function (env9058,summary9059){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env9058,summary9059))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9058,summary9059){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary9059,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary9059),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env9058,summary9059))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9058,summary9059){
return (function (){
cljs.test.set_env_BANG_.call(null,env9058);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary9059));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary9059),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env9058,summary9059))
], null));
})());
});

pi_clock.core_test._main.cljs$lang$maxFixedArity = (0);

pi_clock.core_test._main.cljs$lang$applyTo = (function (seq9057){
return pi_clock.core_test._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9057));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core_test._main;

//# sourceMappingURL=core_test.js.map