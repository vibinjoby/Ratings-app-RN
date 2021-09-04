package com.ratingsapp;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.Window;
import android.view.WindowManager;

import androidx.appcompat.app.AppCompatActivity;


public class SplashActivity extends AppCompatActivity {

    private static final int DELAY_TIME = 3000;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_splash);

        new Handler().postDelayed(() -> {
            Intent intent = new Intent(SplashActivity.this, MainActivity.class);
            Intent i = getIntent();

            if (getIntent() != null) {
                Bundle bundle = i.getExtras();
                if (bundle != null) {
                    intent.putExtras(bundle);
                    Log.d("SPLASHACTIVITY", bundle.toString());
                }
            }


            startActivity(intent);
            finish();
        }, DELAY_TIME);
    }


}