(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 29 7])
(def rpio (js/require "rpio"))
(defn -main [& args]
  (map hardware/open-pin! HOURS-REGISTER)
  (js/setInterval (fn [] (map hardware/set-high! HOURS-REGISTER)) 
                  1000))  
(set! *main-cli-fn* -main)