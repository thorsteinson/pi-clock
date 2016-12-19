goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../pi_clock/hardware.js", ['pi_clock.hardware'], ['cljs.core']);
goog.addDependency("../DAD134C.js", ['cljs.nodejs'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/spec/impl/gen.js", ['cljs.spec.impl.gen'], ['cljs.core']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../cljs/spec.js", ['cljs.spec'], ['cljs.core', 'goog.object', 'cljs.spec.impl.gen', 'clojure.string', 'clojure.walk']);
goog.addDependency("../pi_clock/binary.js", ['pi_clock.binary'], ['cljs.core', 'clojure.string', 'cljs.spec']);
goog.addDependency("../pi_clock/led.js", ['pi_clock.led'], ['cljs.core']);
goog.addDependency("../pi_clock/bridge.js", ['pi_clock.bridge'], ['cljs.core', 'pi_clock.binary', 'pi_clock.led']);
goog.addDependency("../pi_clock/clock.js", ['pi_clock.clock'], ['cljs.core']);
goog.addDependency("../pi_clock/core.js", ['pi_clock.core'], ['pi_clock.hardware', 'cljs.core', 'cljs.nodejs', 'pi_clock.bridge', 'pi_clock.clock']);
goog.addDependency("../cljs/pprint.js", ['cljs.pprint'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../cljs/test.js", ['cljs.test'], ['cljs.core', 'cljs.pprint', 'clojure.string']);
goog.addDependency("../pi_clock/bridge_test.js", ['pi_clock.bridge_test'], ['cljs.core', 'cljs.test', 'pi_clock.bridge']);
goog.addDependency("../pi_clock/binary_test.js", ['pi_clock.binary_test'], ['cljs.core', 'cljs.test', 'pi_clock.binary']);
goog.addDependency("../pi_clock/core_test.js", ['pi_clock.core_test'], ['pi_clock.bridge_test', 'cljs.core', 'cljs.test', 'cljs.nodejs', 'pi_clock.binary_test']);
goog.addDependency("../1BA16AC.js", ['cljs.nodejscli'], ['cljs.core', 'cljs.nodejs']);
