// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]


fn number() -> i32 {
    let h :i32 = 10;
    h

}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![number])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
