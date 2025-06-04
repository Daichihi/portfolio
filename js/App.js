document.addEventListener('DOMContentLoaded', function() {
    // header_right クラスを持つ要素を取得
    const headerRight = document.querySelector('.header_right');

    // 要素が存在しない場合は何もしない
    if (!headerRight) {
        console.warn('要素 ".header_right" が見つかりませんでした。');
        return;
    }

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', function() {
        // 現在のスクロール位置が0より大きいかチェック（少しでもスクロールされたか）
        if (window.scrollY > 0) {
            // スクロールされている場合、表示クラスを追加
        headerRight.classList.add('is-visible');
        } else {
            // スクロール位置が0の場合（一番上）、表示クラスを削除
            headerRight.classList.remove('is-visible');
        }
    });
});
