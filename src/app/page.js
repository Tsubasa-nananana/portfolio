export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#f0f9ff] p-0 text-black text-lg relative overflow-hidden">

      {/* ヘッダー */}
      <header className="w-full bg-gradient-to-r from-[#7da9c7] to-[#5b86b4] text-white text-3xl font-bold py-12 text-center shadow-lg">
        Portfolio
      </header>

      {/* プロフィール */}
      <div className="mt-12 text-center">
        <h1 className="text-5xl font-bold mb-1">中嶋 翼</h1>
        <h2 className="text-2xl mb-6">(Tsubasa Nakajima)</h2>
      </div>

      {/* 連絡先・リンク */}
      <section className="text-center mt-6">
        <p>Mail : cits25009@g.nihon-u.ac.jp</p>
      </section>

      {/* 学歴 */}
      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">🎓 学歴 / Education</h2>
        <p className="mb-2">日本大学 生産工学部 マネジメント工学科 卒業</p>
        <p>日本大学大学院 生産工学研究科 マネジメント工学専攻 修士課程 在籍</p>
      </section>

      {/* 使用技術・スキル */}
      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">💻 使用技術・スキル / Skills</h2>
        <p>Python / TensorFlow</p>
      </section>

      {/* 研究キーワード */}
      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">🔑 研究キーワード / Research Keywords</h2>
        <p>医療AI / 深層学習（Deep Learning） / 画像分類（Image Classification）</p>
      </section>

      {/* 論文・発表実績 */}
      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">📄 論文・発表実績 / Publications</h2>
        <ul className="list-none text-left max-w-3xl mx-auto space-y-6">
        <li>
            <div className="flex">
              <span className="mr-2">・</span>
              <div>
                <p className="mb-1">中嶋翼, 森雅也, 中村颯汰, 大前佑斗, 山下裕玄, 萩原謙, 豊谷純</p>
                <a
                  href="https://soft-cr.org/fss/2025/files/FSS2025_Program_detail_v10.pdf"
                  className="text-[#7e5bef] underline hover:text-[#5b3cc4] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 深層学習を用いた胃癌腹膜播種の診断における実用上の汎化性能に向けたサンプルサイズの推定
                </a>
                <p className="text-sm text-gray-600 mt-1">第41回 ファジィ システム シンポジウム / FSS2025, 2025.9.4</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <span className="mr-2">・</span>
              <div>
                <p className="mb-1">豊谷純, 中嶋翼, チョウバイネイ, 大前佑斗, 森雅也, 萩原謙, 山下裕玄</p>
                <a
                  href="https://nuais.blogspot.com/2024/10/symposium2025.html"
                  className="text-[#7e5bef] underline hover:text-[#5b3cc4] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  内視鏡画像を用いたCNN画像分類
                </a>
                <p className="text-sm text-gray-600 mt-1">日本大学医工連携シンポジウム2025講演予稿集, 2025.2.8</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <span className="mr-2">・</span>
              <div>
                <p className="mb-1">山下裕玄, 豊谷純, 大前佑斗, 森雅也, 中嶋翼, 萩原謙</p>
                <a
                  href="https://nuais.blogspot.com/2024/10/symposium2025.html"
                  className="text-[#7e5bef] underline hover:text-[#5b3cc4] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  人工知能を用いた胃癌腹膜播種巣の検出診断支援と予後予測システムの確立
                </a>
                <p className="text-sm text-gray-600 mt-1">日本大学医工連携シンポジウム2025講演予稿集, 2025.2.8</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <span className="mr-2">・</span>
              <div>
                <p className="mb-1">中嶋 翼, 森 雅也, 大前 佑斗, 豊谷 純, 萩原 謙, 山下 裕玄</p>
                <a
                  href="https://nuais.blogspot.com/2024/10/symposium2025.html"
                  className="text-[#7e5bef] underline hover:text-[#5b3cc4] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNN による胃がん画像の2 クラス分類（ポスター）
                </a>
                <p className="text-sm text-gray-600 mt-1">日本大学医工連携シンポジウム2025講演予稿集, 2025.2.8</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
