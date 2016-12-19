(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]
            [pi-clock.clock :refer [get-time!]]
            [pi-clock.bridge :refer [ALL-PINS time->leds]]))

(node/enable-util-print!)

(defn update-led! [{pin :pin on? :on}]
  (if on? (hardware/set-high! pin)
          (hardware/set-low! pin)))

(defn init-pins! []
  (doseq [p ALL-PINS]
    (hardware/open-pin! p)))

;; Actually updates LEDs to match current time
(defn update-time! []
  (doseq [led (time->leds (get-time!))]
    (update-led! led)))

(defn -main [& args]
  (println "Initializing all pins")
  (init-pins!)
  (println "Starting clock")
  (js/setInterval #((update-time!)) 1000))

(set! *main-cli-fn* -main)