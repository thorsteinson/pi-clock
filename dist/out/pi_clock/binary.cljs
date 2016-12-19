(ns pi-clock.binary
  (:require [clojure.spec :as s]
            [clojure.string :as str]))

(defn ->binary [n]
  (let [bin-str (.toString n 2) 
        digits (rest (str/split bin-str #""))
        one? (partial = "1")]
    (map one? digits)))

(defn pad-zeros [xs size]
  (let [list-len (count xs)
        pad-size (- size list-len)
        zeros (take pad-size (repeat false))]
    (concat zeros xs)))