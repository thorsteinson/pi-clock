// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.binary_test');
goog.require('cljs.core');
goog.require('pi_clock.binary');
goog.require('cljs.test');
pi_clock.binary_test.__GT_binary = (function pi_clock$binary_test$__GT_binary(){
return cljs.test.test_var.call(null,pi_clock.binary_test.__GT_binary.cljs$lang$var);
});
pi_clock.binary_test.__GT_binary.cljs$lang$test = (function (){
try{var values__8841__auto___9018 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(0));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9019 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9018);
if(cljs.core.truth_(result__8842__auto___9019)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9018),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9018);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9013){var t__8879__auto___9020 = e9013;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9020,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9021 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(1));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9022 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9021);
if(cljs.core.truth_(result__8842__auto___9022)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9021),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9021);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9014){var t__8879__auto___9023 = e9014;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9023,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9024 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(2));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9025 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9024);
if(cljs.core.truth_(result__8842__auto___9025)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9024),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9024);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9015){var t__8879__auto___9026 = e9015;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9026,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9027 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(3));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9028 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9027);
if(cljs.core.truth_(result__8842__auto___9028)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9027),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9027);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9016){var t__8879__auto___9029 = e9016;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9029,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto__ = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(4));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto__);
if(cljs.core.truth_(result__8842__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8842__auto__;
}catch (e9017){var t__8879__auto__ = e9017;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

pi_clock.binary_test.__GT_binary.cljs$lang$var = new cljs.core.Var(function(){return pi_clock.binary_test.__GT_binary;},new cljs.core.Symbol("pi-clock.binary-test","->binary","pi-clock.binary-test/->binary",1832119073,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"->binary","->binary",-839080501,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",18,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.__GT_binary)?pi_clock.binary_test.__GT_binary.cljs$lang$test:null)]));
pi_clock.binary_test.pad_zeros = (function pi_clock$binary_test$pad_zeros(){
return cljs.test.test_var.call(null,pi_clock.binary_test.pad_zeros.cljs$lang$var);
});
pi_clock.binary_test.pad_zeros.cljs$lang$test = (function (){
try{var values__8841__auto___9037 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9038 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9037);
if(cljs.core.truth_(result__8842__auto___9038)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9037),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9037);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9030){var t__8879__auto___9039 = e9030;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9039,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9040 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9041 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9040);
if(cljs.core.truth_(result__8842__auto___9041)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9040),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9040);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9031){var t__8879__auto___9042 = e9031;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9042,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9043 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9044 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9043);
if(cljs.core.truth_(result__8842__auto___9044)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9043),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9043);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9032){var t__8879__auto___9045 = e9032;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9045,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9046 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9047 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9046);
if(cljs.core.truth_(result__8842__auto___9047)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9046),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9046);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9033){var t__8879__auto___9048 = e9033;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9048,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9049 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9050 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9049);
if(cljs.core.truth_(result__8842__auto___9050)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9049),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9049);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9034){var t__8879__auto___9051 = e9034;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9051,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto___9052 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto___9053 = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto___9052);
if(cljs.core.truth_(result__8842__auto___9053)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto___9052),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto___9052);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9035){var t__8879__auto___9054 = e9035;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto___9054,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8841__auto__ = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8842__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8841__auto__);
if(cljs.core.truth_(result__8842__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8841__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8841__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8842__auto__;
}catch (e9036){var t__8879__auto__ = e9036;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8879__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

pi_clock.binary_test.pad_zeros.cljs$lang$var = new cljs.core.Var(function(){return pi_clock.binary_test.pad_zeros;},new cljs.core.Symbol("pi-clock.binary-test","pad-zeros","pi-clock.binary-test/pad-zeros",925341714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"pad-zeros","pad-zeros",-689907004,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",19,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.pad_zeros)?pi_clock.binary_test.pad_zeros.cljs$lang$test:null)]));

//# sourceMappingURL=binary_test.js.map