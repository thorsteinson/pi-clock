// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.binary_test');
goog.require('cljs.core');
goog.require('pi_clock.binary');
goog.require('cljs.test');
pi_clock.binary_test.__GT_binary = (function pi_clock$binary_test$__GT_binary(){
return cljs.test.test_var.call(null,pi_clock.binary_test.__GT_binary.cljs$lang$var);
});
pi_clock.binary_test.__GT_binary.cljs$lang$test = (function (){
try{var values__8897__auto___9074 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(0));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9075 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9074);
if(cljs.core.truth_(result__8898__auto___9075)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9074),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9074);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9069){var t__8935__auto___9076 = e9069;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9076,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9077 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(1));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9078 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9077);
if(cljs.core.truth_(result__8898__auto___9078)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9077),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9077);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9070){var t__8935__auto___9079 = e9070;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9079,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9080 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(2));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9081 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9080);
if(cljs.core.truth_(result__8898__auto___9081)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9080),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9080);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9071){var t__8935__auto___9082 = e9071;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9082,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9083 = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(3));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9084 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9083);
if(cljs.core.truth_(result__8898__auto___9084)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9083),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9083);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9072){var t__8935__auto___9085 = e9072;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9085,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto__ = (function (){var x__8014__auto__ = pi_clock.binary.__GT_binary.call(null,(4));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto__);
if(cljs.core.truth_(result__8898__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8898__auto__;
}catch (e9073){var t__8935__auto__ = e9073;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","->binary","bin/->binary",-838983484,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

pi_clock.binary_test.__GT_binary.cljs$lang$var = new cljs.core.Var(function(){return pi_clock.binary_test.__GT_binary;},new cljs.core.Symbol("pi-clock.binary-test","->binary","pi-clock.binary-test/->binary",1832119073,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"->binary","->binary",-839080501,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",18,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.__GT_binary)?pi_clock.binary_test.__GT_binary.cljs$lang$test:null)]));
pi_clock.binary_test.pad_zeros = (function pi_clock$binary_test$pad_zeros(){
return cljs.test.test_var.call(null,pi_clock.binary_test.pad_zeros.cljs$lang$var);
});
pi_clock.binary_test.pad_zeros.cljs$lang$test = (function (){
try{var values__8897__auto___9093 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9094 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9093);
if(cljs.core.truth_(result__8898__auto___9094)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9093),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9093);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9086){var t__8935__auto___9095 = e9086;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9095,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9096 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9097 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9096);
if(cljs.core.truth_(result__8898__auto___9097)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9096),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9096);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9087){var t__8935__auto___9098 = e9087;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9098,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9099 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9100 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9099);
if(cljs.core.truth_(result__8898__auto___9100)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9099),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9099);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9088){var t__8935__auto___9101 = e9088;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9101,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9102 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9103 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9102);
if(cljs.core.truth_(result__8898__auto___9103)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9102),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9102);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9089){var t__8935__auto___9104 = e9089;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),(1)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9104,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9105 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9106 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9105);
if(cljs.core.truth_(result__8898__auto___9106)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9105),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9105);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9090){var t__8935__auto___9107 = e9090;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(2)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9107,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto___9108 = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto___9109 = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto___9108);
if(cljs.core.truth_(result__8898__auto___9109)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto___9108),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto___9108);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e9091){var t__8935__auto___9110 = e9091;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(3)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto___9110,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8897__auto__ = (function (){var x__8014__auto__ = pi_clock.binary.pad_zeros.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto__);
if(cljs.core.truth_(result__8898__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8898__auto__;
}catch (e9092){var t__8935__auto__ = e9092;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","pad-zeros","bin/pad-zeros",-689809923,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,false], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

pi_clock.binary_test.pad_zeros.cljs$lang$var = new cljs.core.Var(function(){return pi_clock.binary_test.pad_zeros;},new cljs.core.Symbol("pi-clock.binary-test","pad-zeros","pi-clock.binary-test/pad-zeros",925341714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"pad-zeros","pad-zeros",-689907004,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",19,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.pad_zeros)?pi_clock.binary_test.pad_zeros.cljs$lang$test:null)]));
pi_clock.binary_test.binpad = (function pi_clock$binary_test$binpad(){
return cljs.test.test_var.call(null,pi_clock.binary_test.binpad.cljs$lang$var);
});
pi_clock.binary_test.binpad.cljs$lang$test = (function (){
try{var values__8897__auto__ = (function (){var x__8014__auto__ = pi_clock.binary.binpad.call(null,(3),(5));
return cljs.core._conj.call(null,(function (){var x__8014__auto____$1 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,true], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
})();
var result__8898__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8897__auto__);
if(cljs.core.truth_(result__8898__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","binpad","bin/binpad",768342722,null),(3),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8897__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","binpad","bin/binpad",768342722,null),(3),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8014__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8897__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8014__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8898__auto__;
}catch (e9111){var t__8935__auto__ = e9111;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("bin","binpad","bin/binpad",768342722,null),(3),(5)),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,false,true,true], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8935__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

pi_clock.binary_test.binpad.cljs$lang$var = new cljs.core.Var(function(){return pi_clock.binary_test.binpad;},new cljs.core.Symbol("pi-clock.binary-test","binpad","pi-clock.binary-test/binpad",1385117477,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pi-clock.binary-test","pi-clock.binary-test",381366579,null),new cljs.core.Symbol(null,"binpad","binpad",768244171,null),"C:\\Users\\caleb\\src\\pi-clock\\test\\pi_clock\\binary_test.cljs",16,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(pi_clock.binary_test.binpad)?pi_clock.binary_test.binpad.cljs$lang$test:null)]));

//# sourceMappingURL=binary_test.js.map