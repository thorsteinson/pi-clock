(ns pi-clock.led)

(defn on [led]
  (assoc led :on true))

(defn off [led]
  (assoc led :on false))

(defn toggle [led]
  (update led :on not))

(defn make-led [pin on?]
  {:on on?
   :pin pin}) 