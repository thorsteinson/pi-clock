(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 29 7])
(def rpio (js/require "rpio"))
(defn -main [& args]
  (doseq [p HOURS-REGISTER]
    (hardware/open-pin! p)))
(set! *main-cli-fn* -main)