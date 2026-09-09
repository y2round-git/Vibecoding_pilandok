$utf8 = [System.Text.Encoding]::UTF8
$jStr = [System.IO.File]::ReadAllText("$pwd\jinhak_clean.html", $utf8)
$uStr = [System.IO.File]::ReadAllText("$pwd\uway_clean.html", $utf8)

function Show-Depts($html, $selTypeId, $label) {
    Write-Host "=== $label ($selTypeId) ==="
    if ($html -match "(?s)<div id=""$selTypeId"".*?</table>") {
        $block = $matches[0]
        $rows = $block -split "<tr"
        foreach ($r in $rows) {
            # look for <td>
            if ($r -match "<td[^>]*>(.*?)</td>\s*<td[^>]*>(.*?)</td>\s*<td[^>]*>(.*?)</td>\s*<td[^>]*>(.*?)</td>\s*<td[^>]*>(.*?)</td>") {
                $c1 = $matches[1] -replace "<[^>]+>", ""
                $c2 = $matches[2] -replace "<[^>]+>", ""
                $c3 = $matches[3] -replace "<[^>]+>", ""
                $c4 = $matches[4] -replace "<[^>]+>", ""
                $c5 = $matches[5] -replace "<[^>]+>", ""
                Write-Host "  COL1: '$c1' | COL2: '$c2' | 紐⑥쭛: '$c3' | 吏?? '$c4' | 寃쎌웳瑜? '$c5'"
            }
        }
    }
}

Show-Depts $jStr "SelType41270" "?숈깮遺醫낇빀 ?쇰컲?숈깮"
Show-Depts $jStr "SelType41267" "?숈깮遺援먭낵 吏??씤?р뀪"
Show-Depts $jStr "SelType41231" "?숈깮遺援먭낵 ?쇰컲?꾪삎"

Write-Host "=== UWAY DEPARTMENTS ==="
$uRows = $uStr -split "<tr"
foreach ($ur in $uRows) {
    if ($ur -match "class=['""]txtFieldValue['""]") {
        $tds = $ur -split "<td"
        $tdText = @()
        foreach ($td in $tds) {
            $txt = ($td -replace "<[^>]+>", " ").Trim()
            if ($txt.Length -gt 0) { $tdText += $txt }
        }
        if ($tdText.Count -ge 4) {
            Write-Host "  UWAY:" ($tdText -join " | ")
        }
    }
}