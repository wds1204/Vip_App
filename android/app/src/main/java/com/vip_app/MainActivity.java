package com.vip_app;

import android.animation.ObjectAnimator;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.view.View;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;


import okhttp3.MediaType;
import okhttp3.OkHttpClient;


public class MainActivity extends ReactActivity {


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Vip_App";
    }
    public static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {


        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

//    String post(String url,String json) throws IOException {
//
//        RequestBody body=RequestBody.create(JSON,json);
//        Request request=new Request.Builder().url("url").post(body).build();
//        Response response = client.newCall(request).execute();
//
//        return response.body().string();
//    }
    @RequiresApi(api = Build.VERSION_CODES.HONEYCOMB)
    public void startAnimation(View view){
        ObjectAnimator color = ObjectAnimator.ofInt(view, "backgroundColor", 1, 2, 3);
        color.setStartDelay(10000);
        color.start();
    }
}
