# 品質管理システム LineQC (Quality Control System LineQC) Scraped Content

Source: https://www.skyaxes.jp/lineqc/

---

## 1. 概要 (Overview)
LineQCは、製造部門が決めたルールを仕組み化し、ソフトウェアが監視することで工程内不良ゼロの実現を目指す品質管理システムです。ワゴンタイプの装置で、各製造機械の真横でサンプリングチェックを行います。

**【English Summary】**
LineQC is an in-process quality control system designed to eliminate production defects by digitizing manufacturing rules and enforcing them through software. Built as a mobile wagon-type unit, it allows operator sampling checks right next to individual production machines.

### 目標 (Core Goal)
**「工程内不良の撲滅」 (Elimination of In-Process Defects)**

---

## 2. 仕組み化する4大要素 (4 Key Elements Systematized by Software)
1. **測定頻度、部位、本数、管理値** (Measurement frequency, locations, quantity, control limits)
2. **量産承認手順の仕組み化** (Systematizing setup approval flow)
3. **測定時間の監視** (Monitoring measurement times)
4. **測定器の校正時間** (Tracking measuring instrument calibration times)

*すべてのルールをソフトウェアが管理し、手順やマニュアルから外れた操作・作業は行えません。NG品が発生しそうになった段階で監視ソフトが即時警告を発出します。*

---

## 3. 主な3つの機能 (3 Main Core Functions)
1. **【部品の受入管理】** (Incoming Inspection)
   * 外部から調達した半製品、完成品の受入品質管理。
2. **【工程内の品質管理】** (In-Process Quality Control)
   * 各製造機械の真横まで移動し、タイムリーにサンプリングチェック。
3. **【出荷前検査】** (Pre-Shipment Inspection)
   * 製品出荷前に全仕様に合致しているかをファイナル検査。

---

## 4. このシステムでできること (System Capabilities)

### ① 電子化 (Digitization & Paperless)
* 管理の合理化、記入作業の省力化、転記間違いの回避。
* データの信頼性向上、紙の保管場所の削減。
* データへの迅速なアクセス、集計・分類、分析の有効活用。

### ② ソフトによる作業手順の管理 (Software Enforcement)
* 測定器の校正管理。
* 量産承認手順の仕組み化（校正 → 調整用SETUP値確認 → 量産開始のフロー制御）。
* サンプリング検査・傾向予兆管理。
* ルール逸脱時のアラート・機械停止制御。

### ③ データ分析 (Data Analysis & Analytics)
* NG品発生時の遡り調査・原因特定スピードの向上。
* 設備の工程能力（Cp/Cpk）の見える化。
* 測定データを基にした人材育成。

---

## 5. システムの主な特徴 (Key System Features)
* **測定時間の監視**: 自動、手動測定ともにデータ測定時間監視機能を装備。
* **校正管理**: 測定器の校正内容とインターバル時間をシステム監視。
* **SETUP値とMASS値の2重管理**: 機械調整用（SETUP）規格値と量産（MASS）規格値の2段階設定により精度の高い調整が可能。
* **図面の管理表示**: 工程ごとの製品図面をモニター表示し、測定部位の直感的な視認による誤測定防止。
* **多工程管理**: 複数の工程や異なる測定物を1台で並行管理。
* **チャート自動表示**: 測定時に自動合否判定を行い、Xチャート、Cp/Cpkチャートをリアルタイム表示。
* **自動記録 & 出力**: 測定データは自動保存され、Excel等を使用して顧客指定の検査成績書フォーマットへ出力可能。
* **パトライト（警告灯）連携**: 判定結果をパトライト（シグナルタワー）の点灯・ブザー音で現場に通知。
* **自律分散型システム**: 通信環境の整っていないオフライン環境でも測定可能な堅牢性。
* **柔軟な構成**: スタンドアローン型、またはクライアントサーバ型から選択可能。
* **コンパクト設計**: 自由に移動して設置できるコンパクトなワゴンタイプ。
* **多言語対応**: 日本語、英語のほか、多言語へのカスタマイズが可能。

---

## 6. 動作環境 (Recommended Specifications)

### 【クライアント (Client PC)】
* **OS**: Windows 10
* **CPU**: Intel Celeron N4000 以上
* **メモリ**: 4GB
* **ストレージ**: 64GB
* **解像度**: 1920×1080
* **その他**: 無線LAN、Bluetooth 4.0、Microsoft Excel 2019 (データ分析用途)

### 【サーバ／スタンドアローン (Server / Standalone PC)】
* **OS**: Windows 10 Pro
* **CPU**: Intel Core i5 以上
* **メモリ**: 16GB
* **ストレージ**: 128GB
* **解像度**: 1920×1080
* **その他**: Bluetooth 4.0（サーバ側は不要）、Microsoft Excel 2019
