(ns pi-clock.binary-test
  (:require [pi-clock.binary :as bin] 
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest ->binary
  (is (= (bin/->binary 0) (seq [false])))
  (is (= (bin/->binary 1) (seq [true])))
  (is (= (bin/->binary 2) (seq [true false])))
  (is (= (bin/->binary 3) (seq [true true])))
  (is (= (bin/->binary 4) (seq [true false false]))))

(deftest pad-zeros
  (is (= (bin/pad-zeros [false] 1) (seq [false])))
  (is (= (bin/pad-zeros [false] 2) (seq [false false])))
  (is (= (bin/pad-zeros [false] 3) (seq [false false false])))
  (is (= (bin/pad-zeros [true] 1) (seq [true])))
  (is (= (bin/pad-zeros [true false] 2) (seq [true false])))
  (is (= (bin/pad-zeros [true false] 3) (seq [false true false])))
  (is (= (bin/pad-zeros [true false] 5) (seq [false false false true false]))))

(deftest binpad
  (is (= (bin/binpad 3 5)
         (seq [false false false true true]))))