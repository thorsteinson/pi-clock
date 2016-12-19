(ns pi-clock.hardware
  (:require [cljs.core.async :as async :refer :all]))

(def rpio (js/require "rpio"))

(def HIGH (.-HIGH rpio))
(def LOW (.-LOW rpio))
(def OUTPUT (.-OUTPUT rpio))

(defn open-pin! [p]
  (.open rpio p OUTPUT LOW))

(defn set-low! [p]
  (.write rpio p LOW))

(defn set-high! [p] 
  (.write rpio p HIGH))