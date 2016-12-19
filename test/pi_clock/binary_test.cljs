(ns pi-clock.binary-test
  (:require [pi-clock.binary :refer [->binary]]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest converts-binary-properly
  (is (= (->binary 0) (seq [false])))
  (is (= (->binary 1) (seq [true])))
  (is (= (->binary 2) (seq [true false])))
  (is (= (->binary 3) (seq [true true])))
  (is (= (->binary 4) (seq [true false false]))))