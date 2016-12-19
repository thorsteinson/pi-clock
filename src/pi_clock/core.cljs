(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 29 7])
(def rpio (js/require "rpio"))

(defn -main [& args]
  (map hardware/open-pin! HOURS-REGISTER)
  (map hardware/set-high! HOURS-REGISTER)
  (.open rpio 11 (.-OUTPUT rpio) (.-HIGH rpio)) 
  (js/setTimeout #(println "plz change") 1000))

(set! *main-cli-fn* -main)