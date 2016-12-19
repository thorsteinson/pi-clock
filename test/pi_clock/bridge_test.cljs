(ns pi-clock.bridge-test
  (:require [pi-clock.bridge :as bridge] 
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest assign-leds
  (is (= (bridge/assign-leds [0 0] 3)
         (seq [{:pin 0 :on true}
               {:pin 0 :on true}]))))

; (deftest time->leds
;   (let [zero-time {:hours 0 :minutes 0 :seconds 0}]
;     (is (= 18 (count (bridge/time->leds zero-time))))))