(ns lt.plugins.html.live
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.clients :as clients]
            [lt.objs.console :as console]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd]
            [lt.objs.eval :as eval]
            [crate.core :as crate]
            [crate.binding :as binding]
            )
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn start-browser [path]
  (cmd/exec! :add-browser-tab (str "file://" path)))

(defn get-browser-client! [editor]
 (eval/get-client! {:command :editor.eval.html
                    :origin editor
                    :create (fn [opts] (start-browser (-> @editor :info :path)))
                    :info (:info @editor)
                    :key :live-frame}))

(behavior ::eval-on-change
          :triggers #{:change}
          :reaction (fn [editor]
                        (when-let [client (get-browser-client! editor)]
                          (when (= :frame (:type @client))
                            (let [iframe-doc (->> (:frame @client) (object/->content) (dom/$ :iframe) .-contentDocument)]
                              (dom/html (.-documentElement iframe-doc) (ed/->val editor))
                              )))))

(defui live-toggler [this]
  [:div#instarepl [:span {:class (binding/bound this #(str "livetoggler " (when-not (:live %) "off")))} "live"]]
  :click (fn [e]
           (dom/prevent e)
           (object/raise (:editor @this) :live.toggle!)))

(object/object* ::live-toggler
                :tags #{::live-toggler}
                :name "Live Mode Toggler"
                :live true
                :init (fn [this editor]
                        (object/merge! this {:editor editor})
                        (let [editor-content (object/->content editor)
                              frame (dom/parent editor-content)
                              toggler (live-toggler this)]
                          (dom/append toggler editor-content)
                          (dom/append frame toggler)
                          )
                        ))

(defn live-off [editor]
  (object/remove-tags editor [:editor.html.live])
  (when-let [toggler (::live-toggler @editor)] (object/merge! toggler {:live false})))

(defn live-on [editor]
  ;; connect if necessary
  (get-browser-client! editor)
;;   ;; add the toggle button if necessary
  (when-not (::live-toggler @editor)
    (object/merge! editor {::live-toggler (object/create ::live-toggler editor)}))
  (object/add-tags editor [:editor.html.live])
  (object/merge! (::live-toggler @editor) {:live true})
  )

(behavior ::live-toggle
          :triggers #{:live.toggle!}
          :reaction (fn [editor]
                      (if (object/has-tag? editor :editor.html.live)
                          (live-off editor)
                          (live-on editor))
                      (ed/focus editor)))



(cmd/command {:command :html.toggle-live
                  :desc "HTML: Toggle live mode"
                  :exec (fn []
                          (when-let [ed (pool/last-active)]
                            (object/raise ed :live.toggle!)
                            ))})


